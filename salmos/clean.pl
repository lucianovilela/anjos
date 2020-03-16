#!/usr/bin/perl
$STATE=0;
while(<>){
    chomp;

    if(/.*Versículos de Salmo./i){
        $STATE=1;
        $_=<>;
        chomp;
    }
    if(/.*Temas relacionados com o Salmo/i 
      || ($STATE && /.*Salmo do Dia/i)
      || ($STATE && /.*\[\d+\]Salmos /i)){
        $STATE=0;
    }
    if($STATE){
        print "$_\n";
    }

}