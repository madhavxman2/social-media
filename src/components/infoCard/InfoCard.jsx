import React, { useState } from 'react';
import './infoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../profileModal/ProfileModal';
import { MantineProvider } from "@mantine/core";

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false); // Initialize modal to closed

    const handlePenClick = () => {
        setModalOpened(true); // Open modal on pen click
    };

    return (

        <div className='InfoCard'>
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen
                        width='2rem'
                        height='1.2rem'
                        onClick={handlePenClick} // Attach click handler to pen icon
                    />
                    {modalOpened &&
                        <MantineProvider>
                            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
                        </MantineProvider>
                    }
                </div>
            </div>

            <div className="info">
                <span><strong>Status </strong></span>
                <span>Bachelor</span>
            </div>
            <div className="info">
                <span><strong>Lives in </strong></span>
                <span>Noida</span>
            </div>
            <div className="info">
                <span><strong>Works at </strong></span>
                <span>Hopping Minds</span>
            </div>
            <button className="button logout-button">Logout</button>
        </div>
    );
};

export default InfoCard;
