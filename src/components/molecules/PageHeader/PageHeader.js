import React from 'react'
import classnames from "classnames";
import "./PageHeader.scss";

export const PageHeader = (props) => {
	const pageHeaderClass = classnames(
		"c-page-header",
		props.className,
		{
			"c-page-header--small": props.isSmall
		}
	);

	return (
		<header className={pageHeaderClass}>
			<h1 className="c-page-header__title">{props.title}</h1>

			{props.description && (
				<div className="c-page-header__description c-text-passage">
					{props.description}
				</div>
			)}
		</header>
	)
}

PageHeader.defaultProps = {
	title: "This is the page title",
	description: "This is a description"
};


