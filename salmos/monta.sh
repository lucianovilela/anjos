#!/bin/bash

for i in salmos_*
do
salmo=${i%%.txt}
salmo=${salmo##salmos_}
echo {\'id\':\'$salmo\', \'texto\':\'
./clean.pl < $i| tr -d "'"
#echo {\'id\':\"$salmo\", \'texto\':\"$texto\"},
echo \'},
done