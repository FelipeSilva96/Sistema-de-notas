package com.felipe.notasapi.controller;

import com.felipe.notasapi.model.Aluno;
import com.felipe.notasapi.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AlunoController {

    @Autowired
    private AlunoService service;

    @PostMapping("/alunos")
    public Aluno cria(@RequestBody Aluno aluno) {
        return service.adiciona(aluno);
    }

    @GetMapping("/alunos")
    public List<Aluno> lista() {
        return service.lista();
    }

    @GetMapping("/estatisticas")
    public Map<String,Object> estatisticas() {
        return service.estatisticas();
    }
}
