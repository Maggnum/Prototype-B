import { useEffect, useState } from "react";
import type { employee } from "../../modules";
import type { LatLngExpression } from "leaflet";
import { fetchPosition } from "../../services";

interface marker {
  position: LatLngExpression;
  popup: string;
}

export const useEmployeeMarker = (employees: employee[]) => {
  const [markers, setMarkers] = useState<marker[]>();

  useEffect(() => {
    const convertEmployees = async () => {
      if (!employees) return;

      // Group by city
      const cityGroups = new Map<string, employee[]>();
      employees.forEach((employee) => {
        if (!cityGroups.has(employee.city)) {
          cityGroups.set(employee.city, []);
        }
        cityGroups.get(employee.city)!.push(employee);
      });

      // Create single marker per city
      const newMarkers: marker[] = await Promise.all(
        Array.from(cityGroups.entries()).map(
          async ([city, groupedEmployees]) => {
            const position = await fetchPosition(city);

            return {
              position,
              popup: groupedEmployees
                .map((employee) => `${employee.firstName} ${employee.lastName}`)
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
