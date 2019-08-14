# ASL Interpreter

## Inspiration
American Sign Language or ASL, is a language with around 375000 users in the world. There is a significant communication barrier between deaf individuals who use ASL and hearing individuals who do not know ASL. This problem is exacerbated by a lack of qualified intreperters. ASL is as unique language because it is soley visual. This project uses computer vision techniques, deep learning, along with voice to text to be able to create a prototype service to serve as an ASL intrepreter.

## How this is accomplished
The web-based frontend built in React serves as the intermediary.




## Setup and Running the project
You will need nodejs (npm), react, (anaconda) python 3.6+ along with all the python libraries.

run npm install to get packages for node and react

You will have to do conda install <package_name> for all the python dependencies (e.g. conda install tensorflow) in anaconda prompt

To run everything 
	-run voiceText.py as the voice-to-text backend
	-run aslText.py as the asl-to-text backend
	-run npm start in the asl-remastered dir level
