import{theShire,buckland, HobbitSettlement} from './another-module.js';

export {theShire, statement};


const bree = new HobbitSettlement('Bree', 473, 'Atanatári who did not reach Beleriand');
const statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;
