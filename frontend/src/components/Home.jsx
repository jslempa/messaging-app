
import TBD from './TBD'
import Header from './Header'
import { useState } from 'react'
import PostModal from './PostModal'
import Posts from './Posts'
import Nav from './Nav'
import Footer from './Footer'

const Home = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }
  
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="home">
            <Header onOpenModal={openModal}/>
            <PostModal isOpen={isModalOpen} onClose={closeModal}/>
            
        </div>
    )
}

export default Home