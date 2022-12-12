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


function createpost(posts,callback)
{
    setTimeout(() => {
        post.push({...posts,d});
        callback();
    }, 2000);
}



createpost({tittle:'post three',body:'this is post three'},getpost);
createpost({tittle:'post four',body:'this is post three'},getpost);
createpost({tittle:'post five',body:'this is post three'},getpost);


