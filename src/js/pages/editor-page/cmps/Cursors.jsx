import { useEffect, useState } from 'react';

import { socketService } from '../../../services/socket.service';
import { utilService } from '../../../services/util.service';

import { FaMousePointer } from 'react-icons/fa';


export function Cursors({ wapId }) {

    const [cursors, setCursors] = useState([]);

    useEffect(() => {
        socketService.setup();

        return () => {
            socketService.off('mouse-moved');
            socketService.off('remove-cursor', removeCursor);
            socketService.terminate();
        }
    }, [])


    useEffect(() => {
        if (wapId) document.body.addEventListener('mousemove', updateMousePos);

        return () => document.body.removeEventListener('mousemove', updateMousePos);
    }, [wapId])


    useEffect(() => {
        socketService.off('mouse-moved');
        socketService.off('remove-cursor', removeCursor);
        socketService.on('mouse-moved', (newCursor) => utilService.debounce(updateCursors(newCursor)));
        socketService.on('remove-cursor', removeCursor);
    }, [cursors, wapId])


    const updateMousePos = (ev) => {
        const pos = { x: ev.clientX, y: ev.clientY };
        socketService.emit('mouse-move', pos);
    }

    const updateCursors = newCursor => {

        const cursorIdx = cursors.findIndex(cursor => cursor.id === newCursor.id);
        if (cursorIdx >= 0) {
            setCursors(prevCursors => {
                prevCursors[cursorIdx] = newCursor;
                return [...prevCursors];
            })
        } else {
            setCursors(prevCursors => [...prevCursors, newCursor]);
        }
    }

    const removeCursor = (cursorId) => {
        const filteredCursors = cursors.filter(cursor => cursor.id !== cursorId);
        setCursors(filteredCursors);
    }

    
    return <>
        {cursors.length > 0 &&
            cursors.map(cursor => {
                return <div
                    key={cursor.id}
                    style={{
                        position: 'fixed',
                        top: cursor.pos.y,
                        left: cursor.pos.x,
                        zIndex: '9999',
                        color: cursor.color
                    }}><FaMousePointer fill={cursor.color} />
                </div>
            })}
    </>
}