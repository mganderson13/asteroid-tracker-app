export default function useDetailsInfo(data) {

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

        const biggest = data[index].name;
        return { biggest, diameter };
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

        const closest = data[index].name;
        return { closest, distance };
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

        const brightest = data[index].name;
        return { brightest, magnitude };
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