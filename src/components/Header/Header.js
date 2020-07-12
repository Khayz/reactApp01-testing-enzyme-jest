import React from 'react';

import './Header.scss';

const Header = () => {
	return (
		<header data-test='Header' className='Header'>
			<div data-test='Header__wrap' className='Header__wrap'>
				<div data-test='Header__logo' className='Header__logo'>
					<h1 data-test='Header__logo__img' className='Header__logo__img'>
						LOGO
					</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
