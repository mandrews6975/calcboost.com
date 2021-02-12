import { withTheme } from '@material-ui/core';

interface Props {}

function NotFound(props: Props) {
	return <div>404</div>;
}

export default withTheme(NotFound);
