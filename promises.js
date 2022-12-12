var d = new Date().getSeconds();

const post =[
    {tittle:'one post',body:'this is post one',createdAt:""},
    {tittle:'post two',body:'this is post two',createdAt:""},
];

function getposts()
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


function createPost(posts)
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
        updateLastUserActivityTime();
    }, 2000);
})
function updateLastUserActivityTime()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var d = new Date().getTime();
            resolve(console.log(d));
        }, 1000);
    })
}
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


//const promise1 = Promise.resolve('hello world');
//const promise2 =10;
//const promise3 =new Promise((resolve, reject) => {
//    setTimeout(resolve,2000,'goodbye');
//})

//Promise.all([promise1,promise2,promise3]).then(value=>console.log(value));

createPost({ tittle: "post Four", body: "this is post 3" }).then(getposts);
deletePost().catch((err) => console.log(err));