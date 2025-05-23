
import { fetchApi, getPost, getPosts } from './api'
import { Post } from './types';

const main=async ():Promise<void> =>{
    const oneResult=await getPost(1)
    console.log(`Single Record`, oneResult.title); // type safe

    const allResults=await getPosts()
    console.log(`All Record ${allResults.length}`); // type safe

    //const genericResult=await fetchApi<Post>
    //console.log(`Generic Record`, genericResult.ti); // type safe
    
}
main().catch(console.error)