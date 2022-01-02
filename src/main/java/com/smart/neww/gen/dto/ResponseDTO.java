package com.smart.neww.gen.dto;

import java.io.Serializable;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseDTO implements Serializable {

    private String data;

    private Date date;

    private static final long serialVersionUID = 1L;
    
}