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