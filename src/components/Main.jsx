import { useState } from 'react'
const api_endpoint = 'http://localhost:3000/posts?tags=Dolci'


export default function Main() {
    const [posts, setPosts] = useState([])

    function fetchData(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }
}

return (
    <>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-3">

            <div className="container">
                <div className="card h-100">
                    <img className='card-img-top' src="" alt="" />
                    <div className="card-body">

                    </div>
                </div>
            </div>
        </div>

    </>
)
