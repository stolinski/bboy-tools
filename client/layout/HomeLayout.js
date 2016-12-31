import React from 'react';

export const HomeLayout = ({content}) => (
    <div>
        <div>
            <Header />
            <img src='/img/tom.jpg' className='billboard' />
            <main className=''>
                {content()}
            </main>
        </div>
        <footer className='site-footer'>
            Bboy Tools © 2015
        </footer>
    </div>
);
