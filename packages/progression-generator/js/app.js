(function(){

    angular.module('ChordLibrary', [])
    .controller('MainController', function($scope){
        $scope.canGoTo = [[0, 1, 2, 3, 4, 5, 6], [0, 2, 4], [0, 3, 5], [0, 1, 4], [0, 2, 5], [1, 3], [2, 5]];
        $scope.chords = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
        $scope.selectedChord = "A";
        $scope.chordQty = 4;
        $scope.selectedType = "major";
        $scope.progression = [];
        $scope.initialFixed = false;
        $scope.members = {
            "A": {
                "major": ["A", "Bmin", "C#min", "D", "E", "F#min", "G#dim"],
                "minor": ["Amin", "Bdim", "C", "Dmin", "Emin", "F", "G"]
            },
            "A#": {
                "major": ["A#", "Cmin", "Dmin", "D#", "F", "Gmin", "G#dim"],
                "minor": ["A#min", "Cdim", "C#", "D#min", "Fmin", "F#", "G#"]
            },
            "B": {
                "major": ["B", "C#min", "D#min", "E", "F#", "G#min", "A#dim"],
                "minor": ["Bmin", "C#dim", "D", "Emin", "F#min", "G", "A"]
            },
            "C": {
                "major": ["C", "Dmin", "Emin", "F", "G", "Amin", "Bdim"],
                "minor": ["Cmin", "Ddim", "D#", "Fmin", "Gmin", "G#", "A#"]
            },
            "C#": {
                "major": ["C#", "D#min", "Fmin", "F#", "G#", "A#min", "Cdim"],
                "minor": ["B", "C#min", "D#dim", "E", "F#min", "G#min", "A"]
            },
            "D": {
                "major": ["D", "Emin", "F#min", "G", "A", "Bmin", "C#dim"],
                "minor": ["Dmin", "Edim", "F", "Gmin", "Amin", "B", "C"]
            },
            "D#": {
                "major": ["D#", "Fmin", "Gmin", "G#", "A#", "Cmin", "Ddim"],
                "minor": ["D#min", "Fdim", "F#", "G#min", "A#min", "B", "C#"]
            },
            "E": {
                "major": ["E", "F#min", "G#min", "A", "B", "C#min", "D#dim"],
                "minor": ["Emin", "F#dim", "G", "Amin", "Bmin", "C", "D"]
            },
            "F": {
                "major": ["F", "Gmin", "Amin", "B", "C", "Dmin", "Edim"],
                "minor": ["Fmin", "Gdim", "G#", "A#min", "Cmin", "C#", "D#"]
            },
            "F#": {
                "major": ["F#", "G#min", "A#min", "B", "C#", "D#min", "Fdim"],
                "minor": ["F#min", "G#dim", "A", "Bmin", "C#min", "D", "E"]
            },
            "G": {
                "major": ["G", "Amin", "Bmin", "C", "D", "Emin", "F#dim"],
                "minor": ["Gmin", "G#dim", "A#", "Cmin", "Dmin", "D#", "F"]
            },
            "G#": {
                "major": ["G#", "A#min", "Cmin", "C#", "D#", "Fmin", "Gdim"],
                "minor": ["G#min", "A#dim", "B", "C#min", "D#min", "E", "F#"]
            }
        }

        $scope.generateProgression = function() {
            $scope.progression = [];
            
            var actualChord = Math.round(Math.random() * 6);

            let crd = {
                id: 0,
                chord: $scope.members[$scope.selectedChord][$scope.selectedType][actualChord]
            }

            $scope.progression.push(crd);
            
            for (let i = 0; i < $scope.chordQty - 1; i++) {
                let nextChord = Math.round(Math.random() * ($scope.canGoTo[actualChord].length - 1));
                let chrd = {
                    id: i + 1,
                    chord: $scope.members[$scope.selectedChord][$scope.selectedType][$scope.canGoTo[actualChord][nextChord]]
                }
                $scope.progression.push(chrd);
                actualChord = nextChord;
            }
        }
    });

})();