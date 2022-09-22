import React from "react";
import '../_config/global.scss'

type PageProps = {
	children: React.ReactNode,
};

const PageContainer = (props: PageProps) => {
	return (
		<div id="page-container" >{props.children}</div>
		)
	}
	
	export default PageContainer;