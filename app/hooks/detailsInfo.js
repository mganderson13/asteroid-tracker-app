import useNasaApi from "./nasaApi";

//display: biggest, closest, how many hazardous, brightest (magnitude)
//take data from http request 
//Biggest/closest/bightest: 
    //find index of asteroid with biggest diameter
    //map over array of asteroids - save index in variable, replace if bigger
    //display {name} is the biggest asteroid with a diameter of {diameter} feet
//How many hazardous:
    //map over data
    // count++ 
export default function useDetailsInfo(selectedDate) {
    const { data } = useNasaApi(selectedDate);
      
    const findBiggest = (data) => {
        let diameter = 0;
        let index;
        
        for (let i = 0; i < data.length; i++) {
            const currentAsteroid = data[i];
            const currentDiameter = currentAsteroid.estimated_diameter.feet.estimated_diameter_max;
            if (currentDiameter > diameter) {
              diameter = currentDiameter;
              index = i;
            }
        }

        return { index, diameter };
    };
      
    const findClosest = (data) => {
        let distance = Infinity;
        let index;
        for (let i = 0; i < data.length; i++) {
            const currentAsteroid = data[i];
            const currentDistance = currentAsteroid.close_approach_data[0].miss_distance.miles;
            if (currentDistance < distance) {
                distance = currentDistance;
                index = i;
            }
        }

        return { index, distance };
    };

    const findBrightest = (data) => {
        let magnitude = Infinity;
        let index;
        for (let i = 0; i < data.length; i++) {
            const currentAsteroid = data[i];
            const currentMagnitude = currentAsteroid.absolute_magnitude_h;
            //lower magnitude = brighter asteroid
            if (currentMagnitude < magnitude) {
                magnitude = currentMagnitude;
                index = i;
            }
        }

        return { index, magnitude };
    };

    const findHazardous = (data) => {
        let count = 0;
        for (let i = 0; i < data.length; i++) {
            const currentAsteroid = data[i];
            if (currentAsteroid.is_potentially_hazardous_asteroid === true) {
                count++;
            }
        };

        return { count };
    };

return { biggest: findBiggest(data),
        closest: findClosest(data),
        brightest: findBrightest(data),
        hazarousCount: findHazardous(data)
        };
};