import { helper }  from '@ember/component/helper';
import scheduler from '../scheduler';

export default helper(() => scheduler.isIdle);
