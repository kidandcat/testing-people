const createFilterByClinic = query => (p: Patient) =>
  !query.clinicId ||
  (p.therapy_id === query.therapyId && p.Center_id === query.clinicId);

const createFilterByDepartment = query => (p: Patient) =>
  !query.departmentId ||
  (p.therapy_id === query.therapyId && p.Department_id === query.departmentId);

const createFilterByDoctor = query => (p: Patient) =>
  !query.doctorId ||
  (p.therapy_id === query.therapyId && p.Doctor_id === query.doctorId);

const selectByFilter: (
  query: Query,
) => Promise<Patient[]> = query => {
  const filters = [
    createFilterByClinic(query),
    createFilterByDepartment(query),
    createFilterByDoctor(query),
  ];

  return Promise.resolve(Patients.filter(i => filters.every(f => f(i))));
};

 /////////////////////////////
 // Having the above, now:  //
 /////////////////////////////
 
const Patients = [{
	User_id: "Juan",
	therapy_id: 1,
	Center_id: 2,
	Doctor_id: 3
},{
	User_id: "Pedro",
	therapy_id: 1,
	Center_id: 2,
	Doctor_id: 2
},{
	User_id: "Charlie",
	therapy_id: 1,
	Center_id: 4,
	Doctor_id: 1
}]

const patients = selectByFilter({
	clinicId: 1,
});

console.log( patients.map(p => p.User_id) );


//////////////////////////////////////////
// What will be printed in the console? //
//////////////////////////////////////////
