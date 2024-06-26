import Nav from './Nav'
import Home from './Home'
import TBD from './TBD'
import Header from './Header'
import { useState } from 'react'
import PostModal from './PostModal'


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
            <Header />
            <Nav onOpenModal={openModal} />
            <PostModal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    )
}

export default Main