var d = new Date().getSeconds();

const post =[
    {tittle:'one post',body:'this is post one',createdAt:""},
    {tittle:'post two',body:'this is post two',createdAt:""},
];

function getpost()
{
    setTimeout(()=>
    {
        let output="";
        post.forEach((posts,index)=>
        {
            output+=`<li>${posts.tittle}  last updated ${d} second ago</li>`;
        });
        document.body.innerHTML = output;
    },1000
    );
}


function createpost(posts)
{
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        post.push(posts);
        const error =false;
        if(!error)
        {
            resolve();
        }
        else
        {
            reject("error:something went wrong");
        }
    }, 2000);
})
}

function deletePost()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(post.length>0)
            {
                resolve(post.pop());
            }
            else{
                reject('array is empty');
            }
        }, 1000);
    });
}


createpost({tittle:'post three',body:'this is post three'});
createpost({tittle:'post four',body:'this is post three'}).then(()=>{
   getpost();
   deletePost().then(()=>{
       getpost();
       deletePost().then(()=>{
        getpost();
        deletePost().then(()=>{
            getpost();
            deletePost().then(()=>{
            getpost();
            deletePost().then(()=>{})
            .catch((err)=>{
                console.log("inside catch block",err);
            })
        })
       })
    })
   })
}).catch(err=>console.log(err));