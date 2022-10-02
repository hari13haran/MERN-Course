import { useEffect, useState } from "react";
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    
    const { workouts, dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const jsonData = await response.json()
            if(response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: jsonData})
            }
        }
        if (user) {
            fetchWorkouts()
            setIsAuthorized(true)
        }
    }, [dispatch, user])

    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
                { !isAuthorized && <span>Please Login / Sign Up</span> }
            </div>
            { isAuthorized && <WorkoutForm /> }
        </div>
     );
}
 
export default Home;