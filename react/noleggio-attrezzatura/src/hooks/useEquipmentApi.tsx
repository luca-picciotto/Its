import { useEffect, useState } from "react"
import { equipmentApiGet } from "../services/equipmentApi";
import EquipmentModel from "../types/equipment.model";

export function useEquipmentApi() {
  const [result, setResult] = useState<EquipmentModel[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    equipmentApiGet()
      .then((data: EquipmentModel[]) => {
          setResult(data);
      })
      .catch((error: string) => {
          setError(error);
      })
      .finally(() => {
          setLoading(false);
      });
  }, []);
  

  return { result, loading, error };
};

export function handleEquipmentClick(equipmentName: string) {
  alert(equipmentName);
}

export default useEquipmentApi;
  