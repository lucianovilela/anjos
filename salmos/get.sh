#!/bin/bash
i=1
while [ $i -le 150 ]
do
	echo SALMO ${i}
	lynx -dump https://www.bibliaon.com/salmos_${i}/ > salmos_${i}.txt
	i=$(( $i +1 ))
done
