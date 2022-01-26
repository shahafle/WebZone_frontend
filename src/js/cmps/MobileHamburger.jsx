import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

export function MobileHamburger() {
   const dispatch = useDispatch();

   const onToggleMenu = () => {
      dispatch()
   }


   return <AiOutlineMenu onClick={onToggleMenu} />
}