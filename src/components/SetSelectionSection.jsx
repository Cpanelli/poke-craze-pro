// import React from "react";
// import { Typography, Grid, Button, CircularProgress } from "@mui/material";
// import { getPokemonCardSets}

// const SetSelectionSection = ({ onSelectSet }) => {
// const [sets, setSets] = React.useState([]);
// const [loading, setLoading] = React.useState(true);

// useEffect(() => {
//     const fetchSets = async () => {
//         try {
//             const fetchedSets = await getPokemonCardSets();
//             setSets(fetchedSets);
//             setLoading(false);
//         } catch (error) {
//           console.error("Error fetching sets", error);
          
//         }
//     };

//     fetchSets();


// })

//   return (
//     <div>
//       <Typography variant="h2" align="center" gutterBottom>
//         Choose a Pokémon Set
//       </Typography>
//       <Grid container spacing={3}>
//         {sets.map((set) => (
//           <Grid item key={set.name} xs={12} sm={6} md={4} lg={3}>
//             {/* Enhanced button styling */}
//             <Button
//               fullWidth
//               variant="contained"
//               color="primary"
//               onClick={() => onSelectSet(set)}
//             >
//               {set.name}
//             </Button>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default SetSelectionSection;
3