import {params,normalize} from '../../../lib/flights';
import {getChatGPTUser} from '../../chatgpt-auth';
export async function POST(request:Request){
 if(!await getChatGPTUser())return Response.json({error:'Please sign in to search.'},{status:401});
 if(request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Invalid origin.'},{status:403});
 try{
 const text=await request.text();if(text.length>12000)return Response.json({error:'Request too large.'},{status:413});
 const {search,key,token}=JSON.parse(text);const p=params(search);
 const apiKey=key||process.env.SERPAPI_KEY;
 if(typeof apiKey!=='string'||!apiKey.trim())return Response.json({error:'Connect your SerpApi key in Live search settings, or use the Google Flights links below.',setup:true},{status:428});
 if(apiKey.length>300)throw Error('Invalid API key.');
 p.set('api_key',apiKey);if(token){if(typeof token!=='string'||token.length>8000)throw Error('Invalid flight selection.');p.set('departure_token',token);}
 const res=await fetch('https://serpapi.com/search.json?'+p,{signal:AbortSignal.timeout(55000)});
 if(!res.ok)return Response.json({error:res.status===401?'The API key was not accepted.':res.status===429?'SerpApi search allowance reached. Check your account.':'Flight provider is unavailable. Please retry.'},{status:502});
 const raw=await res.json() as any;
 if(raw.error)return Response.json({error:String(raw.error).replaceAll(apiKey,'[redacted]').slice(0,400)},{status:502});
 return Response.json({flights:normalize(raw),searchedAt:new Date().toISOString(),link:raw.search_metadata?.google_flights_url||null},{headers:{'Cache-Control':'no-store'}});
 }catch(e){return Response.json({error:e instanceof Error&&e.name==='TimeoutError'?'Search timed out. Try fewer airports.':e instanceof SyntaxError?'Invalid search request.':e instanceof Error&& !/fetch|network/i.test(e.message)?e.message:'Unable to reach flight provider. Please try again.'},{status:400});}
}
