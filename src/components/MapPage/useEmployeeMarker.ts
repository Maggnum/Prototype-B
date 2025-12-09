import { useEffect, useState } from "react";
import type { employee } from "../EmployeesPage/types";
import type { LatLngExpression } from "leaflet";
import { fetchPosition } from "../../api/geoConverter";

interface marker {
  position: LatLngExpression;
  popup: string;
}

const useEmployeeMarker = (employees: employee[]) => {
  const [markers, setMarkers] = useState<marker[]>();

  useEffect(() => {
    const convertEmployees = async () => {
      if (!employees) return;

      // Group by city
      const cityGroups = new Map<string, employee[]>();
      employees.forEach((emp) => {
        if (!cityGroups.has(emp.city)) {
          cityGroups.set(emp.city, []);
        }
        cityGroups.get(emp.city)!.push(emp);
      });

      // Create single marker per city
      const newMarkers: marker[] = await Promise.all(
        Array.from(cityGroups.entries()).map(
          async ([city, groupedEmployees]) => {
            const position = await fetchPosition(city);

            return {
              position,
              popup: groupedEmployees
                .map((e) => `${e.firstName} ${e.lastName}`)
                .join(", "),
            };
          }
        )
      );

      setMarkers(newMarkers);
    };

    convertEmployees();
  }, [employees]);

  return { markers };
};

export default useEmployeeMarker;
