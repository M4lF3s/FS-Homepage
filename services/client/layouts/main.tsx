import { Meta } from '../components/meta';
import { Navigation } from '../components/Navigation';

export default ({ children }) => (
    <div>
        <Meta />
        <Navigation/>
        { children }
    </div>
)