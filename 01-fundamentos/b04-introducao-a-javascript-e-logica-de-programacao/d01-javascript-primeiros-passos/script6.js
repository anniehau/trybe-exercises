let piece = "king".toLowerCase();

switch (piece) {
  case "king":
    console.log("King: Moves one block towards any direction.")
    break
  case "rook":
    console.log("Rook: Moves in a line or column as far as it can.")
    break
  case "bishop":
    console.log("Bishop: Moves diagonally as far as it can. Cannot move to a differently colored block.")
    break
  case "queen":
    console.log("Queen: Moves in a line, column or diagonal as far as it can.")
    break
  case "knight":
    console.log("Knight: Moves in an L-shapped pattern.");
    break
  case "pawn":
    console.log("Pawn: Moves one column forward, but can only take in one diagonal block in front of it.");
    break
  default:
    console.log("ERROR: Piece does not exist.");
}

