HAIKU GENERATOR INSTRUCTIONs:

Pass an array as the first argument to haiku_generator.js, e.g. 'node haiku_generator [1,2,3]'
Ensure the argument follows the following rules:
1) Is in an array format, e.g. [1,2,3]
2) Is a one or two dimensional array, but no deeper. E.g. [1,2,3] and [1,2,3,[4,5]] are OK, but [1,[2,[3,4]],5] is not supported. 
3) Contains integer elements <= 14. 

Notes
I think I could have used recursion to do better than two dimensional arrays, but didn't have the confidence/time to play with that. Also, for the use case of a haiku generator, I think two dimensional does the job nicely, where the nested array indicates multiple words on a line. Having a twice nested array would get too crazy (like indented crazy!).

I also ideally would have better error handling for cases that don't meet rules 1-3 instead of one generic one. 