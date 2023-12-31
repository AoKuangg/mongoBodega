import { connDB } from "../db/ConnectDB.js";

export async function autoIncrementID(coleccion) {
  let db = await connDB();
  let collection = db.collection("counters");
  const sequenceDocument = await collection.findOneAndUpdate(
    { ID: `${coleccion}Id` },
    { $inc: { sequence_value: 1 } },
    { returnDocument: "after" }
  );
  return sequenceDocument.value.sequence_value;
}