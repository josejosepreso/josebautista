const TechnologiesGrid = ({ technologies, show }: { technologies: any[], show: boolean; }) => (
	<div className={ "absolute" + (!show ? " invisible" : "") } >
	</div>
);

export default TechnologiesGrid;