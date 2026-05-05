import { sartiqafntsoria } from '../sartiqafntsoria';
import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

const { width: smaritiqw, height: tacinqoreh } = Dimensions.get('window');

interface Props {
    questions: any[]; // додано questions
    userAnswers: number[];
    setUserAnswers: (answers: number[]) => void;
    goToResult: () => void;
}

export default function UserAnswerHere({ questions, userAnswers, setUserAnswers, goToResult }: Props) {
    const [selected, setSelected] = useState<number | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const qIdx = userAnswers.length;
    const q = questions[qIdx];

    const handleAnswer = (answerIdx: number) => {
        if (selected !== null) return; // prevent double tap
        setSelected(answerIdx);
        setShowAnswer(true);

        setTimeout(() => {
            const updated = [...userAnswers, answerIdx];
            setUserAnswers(updated);
            setSelected(null);
            setShowAnswer(false);
            if (updated.length === questions.length) {
                setTimeout(goToResult, 300);
            }
        }, 900);
    };

    if (!q) return null;

    return (
        <View style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: tacinqoreh * 0.09,
            flex: 1,
        }}>
            <View style={{
                borderColor: '#1B685D',
                marginBottom: tacinqoreh * 0.025,
                backgroundColor: '#FFE9CE',
                borderRadius: smaritiqw * 0.05,
                width: smaritiqw * 0.85,
                paddingVertical: tacinqoreh * 0.03,
                justifyContent: 'center',
                borderWidth: smaritiqw * 0.008,
                alignItems: 'center',
            }}>
                <Text style={{
                    fontFamily: sartiqafntsoria.smarmetooner, color: '#1B685D', fontSize: smaritiqw * 0.05, marginBottom: tacinqoreh * 0.01,
                }}>Question {qIdx + 1}</Text>
                <Text style={{
                    paddingHorizontal: smaritiqw * 0.019,
                    color: '#46695a',
                    fontWeight: '600',
                    marginTop: tacinqoreh * 0.01,
                    textAlign: 'center',
                    fontSize: smaritiqw * 0.05,
                }}>{q.word}</Text>
            </View>
            {q.options.map((opt, idx) => {
                let bgColor = '#1B685D';
                if (showAnswer && selected !== null) {
                    if (idx === q.correct || idx === q.answer) {
                        bgColor = '#2CB856'; // правильна відповідь
                    }
                    if (idx === selected && selected !== (q.correct ?? q.answer)) {
                        bgColor = '#880D12'; // натиснута неправильна
                    }
                }
                return (
                    <TouchableOpacity
                        disabled={showAnswer}
                        onPress={() => handleAnswer(idx)}
                        key={idx}
                        style={{
                            paddingVertical: tacinqoreh * 0.018,
                            width: smaritiqw * 0.7,
                            backgroundColor: bgColor,
                            borderRadius: smaritiqw * 0.1,
                            marginVertical: tacinqoreh * 0.008,
                            borderWidth: 1,
                            opacity: showAnswer && selected !== null && idx !== selected && idx !== (q.correct ?? q.answer) ? 0.7 : 1,
                            borderColor: '#FFD076',
                            alignItems: 'center',
                        }}>
                        <Text style={{fontWeight: '600',       fontSize: smaritiqw * 0.055, color: '#FFE9CE',
                        }}>{opt}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
