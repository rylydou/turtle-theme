import { to_vsc_theme } from './theme-builder';
import zughy_dark from './themes/zughy-dark';
import zughy_light from './themes/zughy-light';


(async () => {
	await to_vsc_theme(zughy_dark);
	await to_vsc_theme(zughy_light);
})();
