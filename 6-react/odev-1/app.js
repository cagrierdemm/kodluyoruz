import axios from "axios";

export default async function getData(user_id) {
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts/"+user_id);
    
    const userData = {
        id:user.id,
        name:user.name,
        username:user.username,
        email:user.email,
        address:user.address,
        phone:user.phone,
        website:user.website,
        company:user.company,
        posts:[{
            userId: post.userId,
            id: post.id,
            title: post.title,
            body: post.body
        }]
    }

    return userData;
}