import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { LeaderboardContext } from "../../shared/context/LeaderboardContext";

const TableLeaderboard = () => {
  const leadCtx = useContext(LeaderboardContext);
  const { leaderboardUsers } = leadCtx;

  let counter = 0;

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#fff",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">Challenges</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboardUsers.map((user, index) => {
            counter++;
            return (
              <TableRow key={user.id}>
                <TableCell>
                  {counter}
                  {index === 0 && (
                    <img
                      src="https://res.cloudinary.com/dzwb60tk1/image/upload/v1678537705/1_f37dbf.png"
                      alt="gold-medal"
                      style={{ width: "40px" }}
                    />
                  )}
                  {index === 1 && (
                    <img
                      src="https://res.cloudinary.com/dzwb60tk1/image/upload/v1678537705/2_ecob4q.png"
                      alt="silver-medal"
                      style={{ width: "40px" }}
                    />
                  )}
                  {index === 2 && (
                    <img
                      src="https://res.cloudinary.com/dzwb60tk1/image/upload/v1678537705/3_l6ynnp.png"
                      alt="bronze-medal"
                      style={{ width: "40px" }}
                    />
                  )}
                </TableCell>
                <TableCell align="right">
                  <img
                    src={user.image}
                    alt="img"
                    style={{ width: "40px", borderRadius: "100%" }}
                  />
                </TableCell>
                <TableCell align="right">{user.first_name}</TableCell>
                <TableCell align="right">{user.last_name}</TableCell>
                <TableCell align="right">{user.user_name}</TableCell>
                <TableCell align="right">{user.level}</TableCell>
                <TableCell align="right">
                  {user.submittedChallenges.length}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableLeaderboard;
