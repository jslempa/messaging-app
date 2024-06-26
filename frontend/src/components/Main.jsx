import Nav from './Nav'
import Home from './Home'
import TBD from './TBD'
import Header from './Header'
import { useState } from 'react'
import PostModal from './PostModal'
import Posts from './Posts'

const Main = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }
  
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="main">
            <Nav onOpenModal={openModal} />
            <PostModal isOpen={isModalOpen} onClose={closeModal}/>
            <Posts/>
        </div>
    )
}

export default Main