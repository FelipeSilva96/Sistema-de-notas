package com.felipe.notasapi.service;

import com.felipe.notasapi.model.Aluno;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class AlunoService {
    private final List<Aluno> turma = new ArrayList<>();

    public Aluno adiciona(Aluno a) {
        float soma = 0;
        for (float n : a.getNotas()) soma += n;
        float media = soma / a.getNotas().length;
        a.setMedia(media);
        turma.add(a);
        return a;
    }

    public List<Aluno> lista() {
        return turma;
    }

    public Map<String,Object> estatisticas() {
        int N = turma.size();
        // médias de cada disciplina
        List<Float> mediasDisc = IntStream.range(0,5)
            .mapToObj(d ->
                (float) turma.stream()
                   .mapToDouble(al -> al.getNotas()[d])
                   .average()
                   .orElse(0))
            .collect(Collectors.toList());

        // média geral da turma
        float mediaGeral = (float) turma.stream()
            .mapToDouble(Aluno::getMedia)
            .average()
            .orElse(0);

        // alunos acima da média
        List<Aluno> acima = turma.stream()
            .filter(al -> al.getMedia() > mediaGeral)
            .collect(Collectors.toList());

        // alunos com frequência abaixo de 75%
        List<Aluno> abaixoFreq = turma.stream()
            .filter(al -> al.getFrequencia() < 75f)
            .collect(Collectors.toList());

        return Map.of(
            "mediasDisc", mediasDisc,
            "mediaGeral", mediaGeral,
            "acimaMedia", acima,
            "abaixoFreq", abaixoFreq
        );
    }
}
