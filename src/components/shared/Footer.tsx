import React from 'react';

const Footer = () => {
    return (
        <footer className="border border-t bg-background drop-shadow-t">
            <div className="p-2 flex-between">
                <div>Logo</div>
                <div>footer Links</div>
                <div>
                    <p className="p-regular-12">
                        Copyright &#169;2023.All rights reserved by <span className="p-semibold-12">Protegix Solutions.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
