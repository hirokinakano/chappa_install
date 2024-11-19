import chalk from 'chalk';
import { Command } from 'commander';

export const installCommand = new Command('install')
  .description('Install something')
  .action(() => {
    console.log('Executing install command');
      const art = `
                                                                                                      
        -=-     =***-    =*+:         :.      ..      .-==:            =++-       .#@@%*:             
       #@@@%-   %@@@@#-::@@@@+       %@@*.   #@@@*: .*@@@@@#-         .@@@@+  .:-=+@@@@@%-:           
       =@@@@@#+.=@@@@@@@@@@@@@.      +@@@*  .#@@@@@=%@@+*@@@@+         %@@@@%@@@@@@@@@@@@@@@#:        
        .#@@@@@@@@@@@@@@@@@@@@.       .@@@=   @@@@@@@%:  %@@@@=   :##%@@@@@@@@@@@@@@@@@@@@@@@@.       
        =@@@@@@@@@@@@@#+*%@@@@.        @@@@: .@@@@@@@-  .@@@@@@   .#@@@@@@@@@@@@%##@@@@@@%@@@*        
       =@@@@@@%=+@@@@@%*=*@@@@#-      .@@@@+ :@@@@@@*   -@@@@@@.    :=+%@@@@-%@@@##@@@@@-  ..         
      *@@@@@@@--*@@@@@@@@@@@@@@@*.    :@@@@+ :@@@@@@:   -@@@@@@.       -@@@@@@@@@@@@@@%-              
      .*@@@@@@@@@@@@@@@@@@@@@@@@@%:   =@@@@= -@@@@@@    =@@@@@@.       .+@@@@@@@@@@@@@@@%*-.          
         -@@@@@@@@@@@#+++%@@@@*@@@%   +@@@@- -@@@@@@    =@@@@@@      :+@@@@@@@%=+#@@@@@@@@@@#-        
        -%@@@@@*+@@@@@**=*@@@@-@@@@:  +@@@@- -@@@@@@    =@@@@@@   .-#@@@@@@@@@@%#- :=#@@@@@@@@-       
      =%@@@@@@%:-%@@@@@@@@@@@@:@@@@:  +@@@@= -@@@@@@.   =@@@@@@.  %@@@@@@@#=#@@@@@*===+#@@@@@@=       
      #@@@@@@@%@@@@@@@@@@@@@@@ %@@@.  +@@@@= .%@@@@@    =@@@@@@.  -#@@@%+--+#@@@@@@@@@@@@@@@#-        
       @%%@@@@+%@@@@@@#--#@@@@ :##=   *@@@@+  :*%@%=    -@@@@@@:   .:#@@%@@@@@@@@@@@@@@@@@@@@.        
       %+.@@@@--*@@@@@#=#@@@@@.      :@@@@@=            :@@@@@@:   %@@@@@@@@@@@@@@@*#@@@@@@@#.        
       =@+@@@@%*#@@@@@@@@@@@@@.     :%@@@@@%%%#########%@@@@@@@-   :#@@@@%*=#@@@@@%  :%@@@@#.         
       .%@@@@@@%@@@@@@@@%%@@@@.     =@@@@@* .-+*%@@@@@@@@@@@@@@:   .%@@@@*==#@@@@@%   .%@@@@#         
        :%@@@@%@@@@@@@%= *@@@@      .*%@@+       .-=*#@@@@@@@@*    :@@@@*%@@@@@@@@%    -@@@@#         
         .=###.:=+++=:   .+**:         .               .::--:.      .=+:  .:=*#%%#:     .=+-          
                                                                                                      
      `;

    const artLines = art.split('\n');
    const artLength = artLines[1].length;
    let position = process.stdout.columns - artLength;

    const interval = setInterval(() => {
      console.clear();
      artLines.forEach(line => {
        console.log(chalk.green(' '.repeat(Math.max(0, position)) + line));
      });
      position--;

      if (position + artLength < 0) {
        clearInterval(interval);
      }
    }, 50);
});