/**
 * SmartNewGen exclusive class, all rights reserved
 */
package com.smart.neww.gen.common;

import java.nio.charset.StandardCharsets;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.KeyGenerator;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.Hex;

/**
 * @author Kevin Candia 20-09-2020
 */
public class Hash {

	private static final String SECRET = "qualityinfosolutions"; // llave para encriptar datos
	private static final String DESEDE = "AES/GCM/NoPadding";
	private static final String SHA512 = "SHA-512";
	private static final String MD5 = "MD5";

	public Hash(Boolean aux) {
		if (Boolean.FALSE.equals(aux) ) throw new UnsupportedOperationException("Bad implementation.");
	}

	public String getEncryptMD5(String text) throws NoSuchAlgorithmException, NoSuchPaddingException, 
	InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
		MessageDigest md = MessageDigest.getInstance(MD5);
		byte[] digestOfPassword = md.digest(SECRET.getBytes(StandardCharsets.UTF_8));
		byte[] keyBytes = Arrays.copyOf(digestOfPassword, 24);

		SecretKey key = new SecretKeySpec(keyBytes, DESEDE);
		Cipher cipher = Cipher.getInstance(DESEDE);
		cipher.init(Cipher.ENCRYPT_MODE, key);

		byte[] plainTextBytes = text.getBytes(StandardCharsets.UTF_8);
		byte[] buf = cipher.doFinal(plainTextBytes);
		byte[] base64Bytes = Base64.encodeBase64(buf);

		return new String(base64Bytes);
	}

	public String getDecryptMD5(String text) throws NoSuchAlgorithmException, NoSuchPaddingException, 
	InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
		byte[] message = Base64.decodeBase64(text.getBytes(StandardCharsets.UTF_8));
		MessageDigest md = MessageDigest.getInstance(MD5);
		byte[] digestOfPassword = md.digest(SECRET.getBytes(StandardCharsets.UTF_8));
		byte[] keyBytes = Arrays.copyOf(digestOfPassword, 24);
		SecretKey key = new SecretKeySpec(keyBytes, DESEDE);

		Cipher decipher = Cipher.getInstance(DESEDE);
		decipher.init(Cipher.DECRYPT_MODE, key);

		byte[] plainText = decipher.doFinal(message);

		return new String(plainText, StandardCharsets.UTF_8);
	}

    public String encrypt(String text) throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, 
    InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
    	byte[] data = text.getBytes();
    	KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");
        keyGenerator.init(128);
        SecretKey encryptionKey = keyGenerator.generateKey();

        IvParameterSpec iv = new IvParameterSpec("0102030405060708".getBytes());
        Cipher cipher = Cipher.getInstance(DESEDE);
        cipher.init(Cipher.ENCRYPT_MODE, encryptionKey, iv);
        byte[] encryptData = cipher.doFinal(data);

        return new String(encryptData);
    }

    public  String decrypt(String text) throws NoSuchAlgorithmException, NoSuchPaddingException, 
    InvalidKeyException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException  {
    	byte[] data = text.getBytes();
    	KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");
        keyGenerator.init(128);
        SecretKey encryptionKey = keyGenerator.generateKey();
 
        IvParameterSpec iv = new IvParameterSpec("0102030405060708".getBytes());
        SecretKeySpec spec = new SecretKeySpec(encryptionKey.getEncoded(), "AES");
        Cipher cipher = Cipher.getInstance(DESEDE);
        cipher.init(Cipher.DECRYPT_MODE, spec, iv);

        System.out.println(data.length);
        return new String(cipher.doFinal(data));
    }

	public String getEncryptSHA512(String text) throws NoSuchAlgorithmException {
		MessageDigest md = MessageDigest.getInstance(SHA512);
        md.update(text.getBytes());
        byte[] mb = md.digest();
		return String.valueOf(Hex.encodeHex(mb));
	}

}
