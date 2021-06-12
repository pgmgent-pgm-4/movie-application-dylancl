import styles from './CastListItem.module.scss';
import { CastCard } from '../general/CastCard';

export const CastListItem = ({ actor }) => {
 return (
  <CastCard key={actor.id}  actor={actor} />
 )
}