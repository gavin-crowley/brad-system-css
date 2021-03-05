import React from 'react'
import "./FooterNav.css";

export const FooterNav = (props) => {
	return (
		<nav className="c-footer-nav">
			<ul className="c-footer-nav__list">
				{props.listItems.map(function (listItem, index) {
					return (
						<li
							className="c-footer-nav__item"
							key={`c-footer-nav-item-${index}`}
						>
							<a
								className="c-footer-nav__link"
								href={listItem.href}
							>
								{listItem.text}
							</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}


FooterNav.defaultProps = {
	listItems: [
		{
			href: "#",
			text: "Footer Nav Item 1"
		},
		{
			href: "#",
			text: "Footer Nav Item 2"
		},
		{
			href: "#",
			text: "Footer Nav Item 3"
		},
		{
			href: "#",
			text: "Footer Nav Item 4"
		}
	]
}

