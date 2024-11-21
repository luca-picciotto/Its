## risposta 1
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
grid-column-start: 3;
}
## risposta 2
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
grid-column-start: 5
}
## risposta 3
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 1;
grid-template-rows: 1fr 1fr 1fr 1fr 96%;
}
## risposta 4
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 5;
grid-column-end: 2
}
## risposta 5
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 1;
grid-column-end: -2
}
## risposta 6
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
grid-column-start: -3
}
## risposta 7
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 2;
grid-column-end: span 2

}
## risposta 8
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 1;
grid-column-end: span 5
}
## risposta 9
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
grid-column-start: span 3
  grid-column-end: 6;
}
## risposta 10
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
grid-column: 34
}
## risposta 11
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
grid-column: 2 / 5
}
## risposta 12
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
grid-row-start: 3
}
## risposta 13
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
grid-row: 3 / 6
}

## risposta 14
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
grid-row: 5;
grid-column: 2
}
## risposta 15
arden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
grid-column: 2 / 6;
grid-row: 1 / 6
}
## risposta 16
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
grid-area: 1 / 2 / 4 / 6
}
## risposta 17
garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water-1 {
  grid-area: 1 / 4 / 6 / 5;
}

#water-2 {
grid-area: 2  / 3 / 5 / 6;
}
## risposta 18
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

.water {
  order: 0;
}

#poison {
order: 1
}
## risposta 19
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

.water {
  order: 0;
}

.poison {
order: -1
}
## risposta 20
#garden {
  display: grid;
grid-template-columns: 50% 50%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: 1;
  grid-row: 1;
}
## risposta 21
#garden {
  display: grid;
grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: 1;
  grid-row: 1;
}
## risposta 22
#garden {
  display: grid;
grid-template-columns: 100px 3em 40%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
## risposta 23
#garden {
  display: grid;
grid-template-columns: 1fr 5fr
  grid-template-rows: 20% 20% 20% 20% 20%;
}
## risposta 24
#garden {
  display: grid;
grid-template-columns: 50px 35.5fr 1.5fr 1fr 50px;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-area: 1 / 1 / 6 / 2;
}

#poison {
  grid-area: 1 / 5 / 6 / 6;
}
## risposta 25
#garden {
  display: grid;
grid-template-columns: 75px 3fr 2fr;
  grid-template-rows: 100%;
}
## risposta 26
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
grid-template-rows: 1fr 1fr 1fr 1fr 96%;
}

#water {
  grid-column: 1 / 6;
  grid-row: 5 / 6;
}

