import { useEffect, useState } from 'react'
const api_endpoint = 'http://localhost:3000/posts/'


export default function Main() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchData(api_endpoint)
    }, [])


    function fetchData(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data)
            })
    }

    function handleDeletePost(slug) {
        const deleteEndPoint = `/${api_endpoint}`
        fetch(deleteEndPoint, { method: 'DELETE' })
            .then((res) => {
                if (res) {
                    setPosts(posts.filter((post) => post.slug !== slug));
                } else {
                    console.error('Non hai cancellato nessun post');
                }
            })
    }


    return (
        <>
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-3 mt-4">
                    {
                        posts.map((post, index) => (
                            <div className="container" key={index}>
                                <div className="card h-100" >
                                    <img className='card-img-top' src={`http://localhost:3000/img/${post.image}`} alt={post.slug} />
                                    <div className="card-body">
                                        <h3>{post.title}</h3>
                                        <div className="myBtn">
                                            <button onClick={() => handleDeletePost(post.slug)} type="button" className='btn btn-danger'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </>
    )
}